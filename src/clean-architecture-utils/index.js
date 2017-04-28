export const UsecaseInteractor = usecase => services => (...args) => usecase(services)(...args);

export const ServiceInitializer = (dispatch, getState) => (services) => {
  let _services = {};
  for (let p in services) {
    _services[p] = new services[p](dispatch, getState);
  }
  return _services;
}
