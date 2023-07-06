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

text1.addEventListener('click', (event) => {
  event.target.style.color = colors.next().value;
});

text2.addEventListener('click', (event) => {
  event.target.style.color = colors.next().value;
});

text3.addEventListener('click', (event) => {
  event.target.style.color = colors.next().value;
});


