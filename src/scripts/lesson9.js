const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  count: 0,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.count < this.data.length) {
      return {
        done: false,
        value: this.data[this.count++],
      };
    }

    if (this.count === this.data.length) {
      this.count = 0;
      return {
        done: false,
        value: this.data[this.count++],
      };
    }
  },
};

const changeColor = (color) => (event) => {
  event.target.style.color = color.next().value;
};

text1.addEventListener('click', changeColor({...colors}));

text2.addEventListener('click', changeColor({...colors}));

text3.addEventListener('click', changeColor({...colors}));
