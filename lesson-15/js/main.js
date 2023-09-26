const formEl = document.getElementById('form');
const imageBtn = document.getElementById('image-button');
const inputImage = document.getElementById('change');
const spanEl = document.getElementById('span');
const imageEl = document.createElement('img');

imageEl.setAttribute('src', '');
imageEl.setAttribute('alt', '');

imageBtn.addEventListener('click', () => {
  inputImage.click();
});

inputImage.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const render = new FileReader();

  render.addEventListener('load', (event) => {
    spanEl.remove();
    imageBtn.appendChild(imageEl);
    imageEl.setAttribute('src', event.target.result);
    imageEl.setAttribute('alt', file.name);
    imageEl.setAttribute('width', '300');
  });

  render.readAsDataURL(file);
});

const sendData = async (event) => {
  event.preventDefault();

  const fetchOptions = {
    method: 'POST',
    body: new FormData(formEl),
  };
  debugger;
  const res = await fetch(
    'https://if-student-api.onrender.com/api/file',
    fetchOptions,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => result)
    .catch((error) => console.error(error.message));

  console.log(res);
};

formEl.addEventListener('submit', sendData);
