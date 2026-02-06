import { useEffect, useState } from "react";
import { SERVICES as DEFAULT_SERVICES } from "../data/data";

function normalizeInitial() {
  try {
    const raw = localStorage.getItem("SERVICES");
    if (raw) return JSON.parse(raw);
  } catch (e) {
    // ignore
  }
  return DEFAULT_SERVICES;
}

export default function useServices() {
  const [services, setServices] = useState(() => normalizeInitial());

  useEffect(() => {
    try {
      localStorage.setItem("SERVICES", JSON.stringify(services));
    } catch (e) {
      // ignore
    }
  }, [services]);

  function addService(service) {
    const slug = service.slug
      ? service.slug
      : service.title
          .toString()
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9\-]/g, "");
    const id = service.id || slug || `s-${Date.now()}`;
    setServices((prev) => [...prev, { ...service, id, slug }]);
  }

  function updateService(updated) {
    setServices((prev) =>
      prev.map((s) => (s.id === updated.id ? { ...s, ...updated } : s)),
    );
  }

  function deleteService(id) {
    setServices((prev) => prev.filter((s) => s.id !== id));
  }

  return { services, addService, updateService, deleteService, setServices };
}
