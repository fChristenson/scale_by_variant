export const unreachable = (x: never | undefined): never => {
  throw new Error(`Button of variant ${x} should not be possible`);
};
