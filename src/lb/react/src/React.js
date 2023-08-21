class Component {
  constructor(props = {}, state = {}) {
    this.props = props;
    this.state = state;
  }

  update() {}
  #updater() {
    this.update(this.render());
    this.componentDidUpdate();
  }
  // se llama antes de que se renderice el component
  componentWillMount() {}

  // se llama cuando el componente ya se pinta en el navegador
  componentDidMount() {}

  // se llama cuando el componente se actualizo
  componentDidUpdate() {}

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.#updater();
  }
  build() {
    this.componentWillMount();
    return this.render();
  }
}

export { Component };
