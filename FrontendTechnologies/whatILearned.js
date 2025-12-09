//tables, rows and cell can be created using js

<table class="table table-bordered" id="personalTable">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Icon</th>
      <th scope="col">Description</th>
      <th scope="col">Info</th>
      <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>;

const table = document.getElementById('personalTable');

const tableData = [
  {
    id: 1,
    icon: `<i class="bi bi-1-circle"></i>`,
    description: 'Nr.1',
    info: '1 row',
    image: `<img src="https://images.unsplash.com/photo-1765107064983-d0ead52e8935?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Img 1"/>`,
  },
  {
    id: 2,
    icon: `<i class="bi bi-2-circle"></i>`,
    description: 'Nr.2',
    info: '2 row',
    image: `<img src="https://images.unsplash.com/photo-1765107064983-d0ead52e8935?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Img 2"/>`,
  },
  {
    id: 3,
    icon: `<i class="bi bi-3-circle"></i>`,
    description: 'Nr.3',
    info: '3 row',
    image: `<img src="https://images.unsplash.com/photo-1765107064983-d0ead52e8935?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Img 3"/>`,
  },
  {
    id: 4,
    icon: `<i class="bi bi-4-circle"></i>`,
    description: 'Nr.4',
    info: '4 row',
    image: `<img src="https://images.unsplash.com/photo-1765107064983-d0ead52e8935?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Img 4"/>`,
  },
  {
    id: 5,
    icon: `<i class="bi bi-5-circle"></i>`,
    description: 'Nr.5',
    info: '5 row',
    image: `<img src="https://images.unsplash.com/photo-1765107064983-d0ead52e8935?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Img 5"/>`,
  },
];

for (let i = 0; i < 5; i++) {
  const row = table.insertRow();
  for (let j = 0; j < 5; j++) {
    const cell = row.insertCell();

    switch (j) {
      case 0:
        cell.innerText = tableData[i].id;
        break;
      case 1:
        cell.innerHTML = tableData[i].icon;
        break;
      case 2:
        cell.innerText = tableData[i].description;
        break;
      case 3:
        cell.innerText = tableData[i].info;
        break;
      case 4:
        cell.innerHTML = tableData[i].image;
        const img = cell.querySelector('img');
        img.style.width = '50px';
        img.style.height = '50px';
        img.style.objectFit = 'cover';
        break;
    }
  }
}

//When clicked it opens a new page with img
$(`#personalTable img`).click(function () {
  window.open($(this).attr('src'), '_blank');
});

//Getting text and changing parts of it
const header = document.querySelector('#about span');
const headerText = header.innerText;
const firstLine = headerText.indexOf('|');
const lastLine = headerText.lastIndexOf('|');

const firstPartOfHeader = headerText.substring(0, firstLine);
const lastPartOfHeader = headerText.substring(lastLine + 1);
