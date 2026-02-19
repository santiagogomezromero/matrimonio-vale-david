

## Cambios a realizar

### 1. Actualizar horarios en la Agenda (Schedule)

**Archivo:** `src/contexts/LanguageContext.tsx`

- **Linea 40 (ES):** Cambiar `'11:30 a.m.'` a `'1:00 p.m.'`
- **Linea 42 (ES):** En la descripcion, cambiar `'12:00 p.m.'` a `'1:30 p.m.'`
- **Linea 176 (EN):** Cambiar `'11:30 a.m.'` a `'1:00 p.m.'`
- **Linea 178 (EN):** Cambiar `'12:00 p.m.'` a `'1:30 p.m.'`

### 2. Actualizar horarios en Preguntas Frecuentes (FAQ)

- **Linea 100 (ES):** Cambiar `'12:00 m'` a `'1:30 p.m.'`
- **Linea 236 (EN):** Cambiar `'12:00 PM'` a `'1:30 PM'`

### 3. Cambiar "Rumania" por "Europa"

- **Linea 116 (ES):** Cambiar `'visitar Rumania'` a `'visitar Europa'`
- **Linea 252 (EN):** Cambiar `'visit Romania'` a `'visit Europe'`

### 4. Agregar nuevo Airbnb

**Archivo:** `src/components/Accommodation.tsx`

Agregar un nuevo objeto al array `airbnbs` (despues del ultimo elemento, linea ~167):

```typescript
{
  name: 'Casa en Urubamba',
  description: language === 'es' ? 'Encantadora casa en el Valle Sagrado.' : 'Charming house in the Sacred Valley.',
  location: 'Urubamba',
  link: 'https://www.airbnb.com/rooms/1030483?check_in=2026-04-30&check_out=2026-05-03&guests=1&adults=1',
  image: 'https://a0.muscache.com/im/pictures/miso/Hosting-1030483/original/bc5765a3-4be6-4bcc-bdac-ce3b78024e5d.jpeg?im_w=1200',
},
```

### Resumen

| Archivo | Cambios |
|---------|---------|
| `src/contexts/LanguageContext.tsx` | Horarios 11:30 a 1:00 PM, 12:00 a 1:30 PM (agenda y FAQ, ES+EN), Rumania a Europa |
| `src/components/Accommodation.tsx` | Nuevo Airbnb agregado al listado |

