const Demo = {
  name: "render-demo",

  components: {
    Container
  },

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <container>
          <h4 slot="header">标题</h4>
          <section slot="body">我是内容</section>
          <div slot="footer">我是底部</div>
        </container>
      </div>
    );
  }
};

const Container = {
  name: "container",

  render() {
    console.log(this.$slots);
    // const header = this.$slots.header[0];
    return (
      <div class="container">
        <h1>欢迎!</h1>
        <header>{this.$slots.header}</header>
        <main>{this.$slots.body}</main>
        <footer>{this.$slots.footer}</footer>
      </div>
    );
  }
};

export { Demo };
