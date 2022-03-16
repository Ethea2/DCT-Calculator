import { Component, createSignal } from 'solid-js';

const App: Component = () => {
  const [answer, setAnswer] = createSignal<Number>(0)
  let inputCBox, inputTBox;

  const compute = (c: number, t: number) => {
    setAnswer(() => {
      return Math.round(Math.pow(((c - 300) / 9.6367), 1 / 3) * t)
    })
  }

  return (
    <div>
      <div class="w-full">
        <div>
          <p class="text-2xl font-mono p-4 text-center">DCT Calculator</p>
        </div>
      </div>
      <div class="flex ">
        <div class="flex-1 w-full">
          <input name="C-input"
            id="C-input"
            class="w-full h-12 font-mono shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Enter your C input here"
            ref={inputCBox} />
        </div>
        <div class="flex-1 w-full">
          <input name="T-input"
            id="T-input"
            class="w-full h-12 font-mono shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Enter your T input here"
            ref={inputTBox} />
        </div>
        <div class="flex-initial">
          <button type="button"
            class="inline-flex items-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={(e) => compute(Number(inputCBox.value), Number(inputTBox.value))}>
            Calculate
          </button>
        </div>
      </div>
      <div class="w-full">
        <div>
          <p class="text-2xl font-mono p-4 text-center">Answer: {answer()}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
