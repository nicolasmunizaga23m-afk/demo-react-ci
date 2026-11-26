export function saludar(nombre) {
  if if (typeof nombre !== 'string' || !nombre.trim()) {
    throw new Error('Ingrese un nombre');
  }
  return `Hoa, ${nombre.trim()}`;
}