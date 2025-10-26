const information = document.getElementById('version');
information.innerHTML = `<p>도구 버전</p>
  <ul>
    <li>
      Node.js : ${versions.node()}
    </li>
    <li>
      Chromium : ${versions.chromium()}
    </li>
    <li>
      Electron : ${versions.electron()}
    </li>
  </ul>`;

const callMyCustomFeature = async () => {
  const response = await versions.myCustomFeature();
  console.log(response);
}

callMyCustomFeature();