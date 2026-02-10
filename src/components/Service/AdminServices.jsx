import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useServices from "../../hooks/useServices";
import { logoutAdmin } from "../../hooks/useAuth";

const empty = {
  id: "",
  title: "",
  slug: "",
  description: "",
  image: "",
  children: [],
};

const AdminServices = () => {
  const { services, addService, updateService, deleteService } = useServices();
  const navigate = useNavigate();
  const [form, setForm] = useState(empty);

  function edit(s) {
    setForm({
      id: s.id,
      title: s.title || "",
      slug: s.slug || "",
      description: s.description || "",
      image: s.image || "",
      children: s.children ? JSON.parse(JSON.stringify(s.children)) : [],
    });
  }

  function reset() {
    setForm(empty);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title) return alert("Title is required");
    if (form.id) {
      updateService(form);
      alert("Service updated");
    } else {
      addService(form);
      alert("Service added");
    }
    reset();
  }

  function addChild() {
    const child = {
      id: `c-${Date.now()}`,
      title: "",
      slug: "",
      image: "",
      items: [],
    };
    setForm((f) => ({ ...f, children: [...(f.children || []), child] }));
  }

  function updateChild(index, patch) {
    setForm((f) => {
      const children = [...(f.children || [])];
      children[index] = { ...children[index], ...patch };
      return { ...f, children };
    });
  }

  function deleteChild(index) {
    setForm((f) => ({
      ...f,
      children: (f.children || []).filter((_, i) => i !== index),
    }));
  }

  function addItemToChild(childIndex) {
    setForm((f) => {
      const children = [...(f.children || [])];
      const items = children[childIndex].items || [];
      children[childIndex] = {
        ...children[childIndex],
        items: [...items, { title: "", image: "" }],
      };
      return { ...f, children };
    });
  }

  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleServiceImageFile(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const url = await readFileAsDataURL(file);
      setForm((f) => ({ ...f, image: url }));
    } catch (err) {
      console.error(err);
      alert("Failed to read file");
    }
  }

  async function handleChildImageFile(childIndex, e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const url = await readFileAsDataURL(file);
      updateChild(childIndex, { image: url });
    } catch (err) {
      console.error(err);
      alert("Failed to read child file");
    }
  }

  async function handleItemImageFile(childIndex, itemIndex, e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const url = await readFileAsDataURL(file);
      updateItem(childIndex, itemIndex, { image: url });
    } catch (err) {
      console.error(err);
      alert("Failed to read item file");
    }
  }

  function updateItem(childIndex, itemIndex, patch) {
    setForm((f) => {
      const children = [...(f.children || [])];
      const items = [...(children[childIndex].items || [])];
      items[itemIndex] = { ...items[itemIndex], ...patch };
      children[childIndex] = { ...children[childIndex], items };
      return { ...f, children };
    });
  }

  function deleteItem(childIndex, itemIndex) {
    setForm((f) => {
      const children = [...(f.children || [])];
      const items = (children[childIndex].items || []).filter(
        (_, i) => i !== itemIndex,
      );
      children[childIndex] = { ...children[childIndex], items };
      return { ...f, children };
    });
  }

  return (
    <section className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Admin — Services</h2>
        <div>
          <button
            onClick={() => {
              logoutAdmin();
              navigate("/admin/login");
              window.location.reload();
            }}
            className="px-3 py-1 bg-gray-800 text-white rounded"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <div className="grid gap-4">
            {services.map((s) => (
              <div
                key={s.id}
                className="p-4 border rounded flex justify-between items-center"
              >
                <div>
                  <div className="font-bold">{s.title}</div>
                  <div className="text-sm text-gray-500">{s.slug}</div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => edit(s)}
                    className="px-3 py-1 bg-blue-600 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete service "${s.title}"?`)) {
                        deleteService(s.id);
                        if (form.id === s.id) setForm(empty);
                      }
                    }}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border rounded">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-sm font-semibold">Title</label>
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full border px-2 py-1"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-semibold">
                Slug (optional)
              </label>
              <input
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                className="w-full border px-2 py-1"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-semibold">Description</label>
              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full border px-2 py-1"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-semibold">Image URL</label>
              <input
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                className="w-full border px-2 py-1"
              />
              <div className="mt-2">
                <label className="block text-sm font-semibold">Or upload image</label>
                <input type="file" accept="image/*" onChange={handleServiceImageFile} className="w-full" />
                {form.image && (
                  <img src={form.image} alt="preview" className="mt-2 max-h-36 object-contain" />
                )}
              </div>
            </div>

            {form.id && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Children (detail sections)</h3>
                  <button
                    type="button"
                    onClick={addChild}
                    className="px-2 py-1 bg-indigo-600 text-white rounded text-sm"
                  >
                    Add Child
                  </button>
                </div>

                {(form.children || []).map((ch, ci) => (
                  <div
                    key={ch.id || ci}
                    className="mb-3 p-3 border rounded bg-white"
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div className="w-full">
                        <label className="block text-xs font-semibold">
                          Child Title
                        </label>
                        <input
                          value={ch.title}
                          onChange={(e) =>
                            updateChild(ci, { title: e.target.value })
                          }
                          className="w-full border px-2 py-1 text-sm"
                        />
                        <label className="block text-xs font-semibold mt-2">
                          Child Image (URL or upload)
                        </label>
                        <input
                          value={ch.image || ""}
                          onChange={(e) =>
                            updateChild(ci, { image: e.target.value })
                          }
                          className="w-full border px-2 py-1 text-sm"
                          placeholder="Image URL or leave blank to upload"
                        />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleChildImageFile(ci, e)}
                          className="w-full mt-2"
                        />
                        {ch.image && (
                          <img src={ch.image} alt="preview" className="mt-2 max-h-28 object-contain" />
                        )}
                      </div>
                      <div className="flex flex-col gap-2 ml-2">
                        <button
                          type="button"
                          onClick={() => deleteChild(ci)}
                          className="px-2 py-1 bg-red-600 text-white rounded text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm">Items</h4>
                        <button
                          type="button"
                          onClick={() => addItemToChild(ci)}
                          className="px-2 py-1 bg-green-600 text-white rounded text-sm"
                        >
                          Add Item
                        </button>
                      </div>
                      {(ch.items || []).map((it, ii) => (
                        <div key={ii} className="flex gap-2 items-center mb-2">
                          <input
                            value={it.title}
                            onChange={(e) =>
                              updateItem(ci, ii, { title: e.target.value })
                            }
                            className="flex-1 border px-2 py-1 text-sm"
                            placeholder="Item title"
                          />
                          <input
                            value={it.image || ""}
                            onChange={(e) =>
                              updateItem(ci, ii, { image: e.target.value })
                            }
                            className="w-48 border px-2 py-1 text-sm"
                            placeholder="Item image URL or leave blank to upload"
                          />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleItemImageFile(ci, ii, e)}
                            className="w-36"
                          />
                          {it.image && (
                            <img src={it.image} alt="preview" className="ml-2 max-h-20 object-contain" />
                          )}
                          <button
                            type="button"
                            onClick={() => deleteItem(ci, ii)}
                            className="px-2 py-1 bg-red-500 text-white rounded text-sm"
                          >
                            Del
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-2">
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Save
              </button>
              <button
                type="button"
                onClick={reset}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                New
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminServices;
