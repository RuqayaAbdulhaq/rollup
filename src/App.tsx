import {createSignal, Show} from "solid-js"
import {Motion, Presence} from "solid-motionone"
import './App.css'

function App() {
  const [count, setCount] = createSignal(0)

  const [toggle, setToggle] = createSignal<boolean>(true);

  const increment = () => {
    setToggle(t => !t);
    setTimeout(()=>{
      setCount((prev) => prev + 1);
      setToggle(true);
    },0.15)
  };

  return (
    <div class="w-[100vw] flex justify-center">
      <div class="card flex flex-col gap-[24px] items-center">
        <h1>Increment to simulate data updated from the server</h1>
        <div class="max-h-[20px] overflow-hidden relative">
          <Presence exitBeforeEnter>
            <Show when={toggle()}>
              <Motion.div
                class="text-[16px] font-medium"
                initial={{  y: 15 }}
                animate={{  y: 0 }}
                exit={{  y: -15 }}
                transition={{ duration: 0.15,easing: "ease-in" }}
              >
                {count()}
              </Motion.div>
            </Show>
          </Presence>
        </div>
        
        <button onClick={increment}>
          click to increment
        </button>
      </div>
    </div>
  )
}

export default App
