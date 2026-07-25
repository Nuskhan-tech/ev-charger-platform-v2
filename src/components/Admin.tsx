import { useEffect, useState, type FormEvent } from 'react';
import { Plus, Pencil, Trash2, X, Loader2, ArrowLeft, Star } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

type ProductSpec = { label: string; value: string };

type Product = {
  id: string;
  name: string;
  category: string;
  power: string;
  description: string;
  features: string[];
  specs: ProductSpec[];
  dimensions: string;
  weight: string;
  image_url: string;
  datasheet_url: string;
  featured: boolean;
  sort_order: number;
  created_at: string;
};

const emptyForm = {
  name: '',
  category: 'AC',
  power: '',
  description: '',
  features: '',
  specs: '',
  dimensions: '',
  weight: '',
  image_url: '',
  datasheet_url: '',
  featured: false,
  sort_order: 0,
};

type FormState = typeof emptyForm;

export function Admin() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('sort_order', { ascending: true });
    if (error) {
      setError(error.message);
    } else {
      setProducts((data as Product[]) ?? []);
    }
    setLoading(false);
  }

  function openCreate() {
    setForm(emptyForm);
    setEditingId(null);
    setOpen(true);
  }

  function openEdit(p: Product) {
    setForm({
      name: p.name,
      category: p.category,
      power: p.power,
      description: p.description,
      features: p.features.join('\n'),
      specs: p.specs.map((s) => `${s.label}: ${s.value}`).join('\n'),
      dimensions: p.dimensions ?? '',
      weight: p.weight ?? '',
      image_url: p.image_url ?? '',
      datasheet_url: p.datasheet_url ?? '',
      featured: p.featured,
      sort_order: p.sort_order,
    });
    setEditingId(p.id);
    setOpen(true);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const payload = {
      name: form.name,
      category: form.category,
      power: form.power,
      description: form.description,
      features: form.features
        .split('\n')
        .map((f) => f.trim())
        .filter(Boolean),
      specs: form.specs
        .split('\n')
        .map((line) => {
          const [label, ...rest] = line.split(':');
          return { label: label.trim(), value: rest.join(':').trim() };
        })
        .filter((s) => s.label && s.value),
      dimensions: form.dimensions || null,
      weight: form.weight || null,
      image_url: form.image_url || null,
      datasheet_url: form.datasheet_url || null,
      featured: form.featured,
      sort_order: form.sort_order,
      updated_at: new Date().toISOString(),
    };

    if (editingId) {
      const { error } = await supabase.from('products').update(payload).eq('id', editingId);
      if (error) setError(error.message);
    } else {
      const { error } = await supabase.from('products').insert(payload);
      if (error) setError(error.message);
    }

    setSaving(false);
    if (!error) {
      setOpen(false);
      fetchProducts();
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this product? This cannot be undone.')) return;
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) {
      setError(error.message);
    } else {
      fetchProducts();
    }
  }

  return (
    <div className="min-h-screen bg-ink-950 text-ink-100">
      <div className="border-b border-white/10 glass sticky top-0 z-40">
        <div className="container-x px-5 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#" className="grid h-9 w-9 place-items-center rounded-xl glass hover:border-electric-400/30 transition-colors">
              <ArrowLeft className="h-4 w-4 text-ink-200" />
            </a>
            <h1 className="font-display text-lg font-bold text-white">Product Admin</h1>
          </div>
          <Button onClick={openCreate} size="sm">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>

      <div className="container-x px-5 sm:px-8 lg:px-12 py-8">
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        {loading ? (
          <div className="grid place-items-center py-24">
            <Loader2 className="h-8 w-8 animate-spin text-electric-400" />
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-2xl glass p-12 text-center">
            <p className="text-ink-300">No products yet. Click "Add Product" to create your first one.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {products.map((p) => (
              <div
                key={p.id}
                className="flex items-center gap-4 rounded-2xl glass p-4 hover:border-white/20 transition-colors"
              >
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white/5 grid place-items-center">
                  {p.image_url ? (
                    <img src={p.image_url} alt={p.name} className="h-full w-full object-cover" />
                  ) : (
                    <span className="text-xs text-ink-500">No img</span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display text-base font-bold text-white">{p.name}</h3>
                    <Badge variant={p.category === 'DC' ? 'accent' : 'primary'}>{p.category}</Badge>
                    {p.featured && (
                      <Badge variant="solid">
                        <Star className="h-3 w-3 fill-ink-950 text-ink-950" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-ink-300 truncate">
                    {p.power} · {p.dimensions || 'No dimensions'} · {p.weight || 'No weight'}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Button variant="secondary" size="sm" onClick={() => openEdit(p)}>
                    <Pencil className="h-3.5 w-3.5" />
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(p.id)}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingId ? 'Edit Product' : 'Add Product'}</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 mt-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                value={form.category}
                onValueChange={(v) => setForm({ ...form, category: v })}
              >
                <SelectTrigger id="category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AC">AC</SelectItem>
                  <SelectItem value="DC">DC</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="power">Power *</Label>
              <Input
                id="power"
                required
                placeholder="e.g. 20 kW"
                value={form.power}
                onChange={(e) => setForm({ ...form, power: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="sort_order">Sort Order</Label>
              <Input
                id="sort_order"
                type="number"
                value={form.sort_order}
                onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })}
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                required
                rows={2}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="features">Features (one per line)</Label>
              <Textarea
                id="features"
                rows={4}
                placeholder={'Type 2 connector\nRFID & app start\nIP55 weatherproof'}
                value={form.features}
                onChange={(e) => setForm({ ...form, features: e.target.value })}
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="specs">Specs (label: value, one per line)</Label>
              <Textarea
                id="specs"
                rows={4}
                placeholder={'Connector: Type 2\nMax Current: 32 A\nInput Voltage: 230 V AC'}
                value={form.specs}
                onChange={(e) => setForm({ ...form, specs: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="dimensions">Dimensions</Label>
              <Input
                id="dimensions"
                placeholder="e.g. 400 × 300 × 150 mm"
                value={form.dimensions}
                onChange={(e) => setForm({ ...form, dimensions: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="weight">Weight</Label>
              <Input
                id="weight"
                placeholder="e.g. 4.5 kg"
                value={form.weight}
                onChange={(e) => setForm({ ...form, weight: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="image_url">Image URL</Label>
              <Input
                id="image_url"
                type="url"
                placeholder="https://…"
                value={form.image_url}
                onChange={(e) => setForm({ ...form, image_url: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="datasheet_url">Datasheet URL</Label>
              <Input
                id="datasheet_url"
                type="url"
                placeholder="https://…"
                value={form.datasheet_url}
                onChange={(e) => setForm({ ...form, datasheet_url: e.target.value })}
              />
            </div>
            <div className="sm:col-span-2 flex items-center gap-3">
              <input
                id="featured"
                type="checkbox"
                checked={form.featured}
                onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                className="h-4 w-4 rounded border-white/20 bg-white/5 accent-electric-500"
              />
              <Label htmlFor="featured" className="mb-0 cursor-pointer">
                Featured product
              </Label>
            </div>

            {error && (
              <div className="sm:col-span-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <div className="sm:col-span-2 flex justify-end gap-3 pt-2">
              <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={saving}>
                {saving ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Saving…
                  </>
                ) : (
                  <>
                    {editingId ? 'Save Changes' : 'Create Product'}
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
