"use strict";

const LikeButton = () => {
  const [state, setState] = React.useState({ liked: false });

  if (state.liked) {
    return "You liked this.";
  }

  return React.createElement(
    <button onClick={() => setState({ liked: true })}> Like </button>
  );
};

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(LikeButton), domContainer);
