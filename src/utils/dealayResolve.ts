export const delayResolve = <T>(data: T, delayInms: number) => {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delayInms);
  });
};
