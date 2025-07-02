import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <button className="btn btn-xs">Xsmall</button>
        <button className="btn btn-sm">Small</button>
        <button className="btn">Medium</button>
        <button className="btn btn-lg">Large</button>
        <button className="btn btn-xl">Xlarge</button>
      </div>
      <div>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>
      </div>
      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <div>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
        </div>
        <div>
          <div className="badge badge-primary">Primary</div>
          <div className="badge badge-secondary">Secondary</div>
          <div className="badge badge-accent">Accent</div>
          <div className="badge badge-neutral">Neutral</div>
          <div className="badge badge-info">Info</div>
          <div className="badge badge-success">Success</div>
          <div className="badge badge-warning">Warning</div>
          <div className="badge badge-error">Error</div>
        </div>
        <div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            open modal
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
}

export default App;
