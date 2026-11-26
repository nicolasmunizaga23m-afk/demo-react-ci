export function saludar(nombre) {
  if (typeof nombre !== 'string' || !nombre.trim()) {
    throw new Error('Ingrese un nombre');
  }
  return `Bienvenido, ${nombre.trim()}`;
}