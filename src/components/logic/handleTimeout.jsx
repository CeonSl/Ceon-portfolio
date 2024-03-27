export const handleTimeout = (setter) => {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 8000);
};
