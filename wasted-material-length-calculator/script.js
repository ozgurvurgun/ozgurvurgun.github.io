let parts = [];
function calculate() {
  for (let i = 0; i < sayac; i++) {
    valueOne =
      Number(document.getElementById("kesilecek_parcalar_" + i).value) / 10;
    valueTwo = Number(document.getElementById("kac_tane_" + i).value);
    parts.push({
      request_length: valueOne,
      request_number: valueTwo,
      possibility_values: [],
    });
  }
  go();
}
function go() {
  let min = +Infinity;
  let max = -Infinity;
  for (let j = 0; j < parts.length; j++) {
    if (parts[j].request_number < min) {
      min = parts[j].request_number;
    }
    if (parts[j].request_number > max) {
      max = parts[j].request_number;
    }
  }

  let real_stock_length =
    Number(document.getElementById("stock_uzunluk").value) / 10;
  let stock_length =
    Number(document.getElementById("stock_uzunluk").value) / 10;
  let stock_length_plus =
    Number(document.getElementById("stock_uzunluk").value) / 10;
  let parts_sum = 0;
  let totals_parth_length = 0;
  parts.forEach((element) => {
    parts_sum = element.request_length * element.request_number;
    totals_parth_length += parts_sum;
  });
  while (true) {
    if (totals_parth_length > stock_length) {
      stock_length += stock_length_plus;
    } else {
      break;
    }
  }
  let difference = stock_length - totals_parth_length;
  let added_stock = stock_length / real_stock_length;
  let result = [];
  let total = 0;
  let pawn = 0;
  let end = 0;
  let x = 0;
  let temp = 0;
  let totalLengthDOM = 0;
  let totalLengthPawnDOM = 0;
  while (true) {
    for (let i = 0; i < parts.length; i++) {
      for (let j = 0; j < added_stock; j++) {
        parts[i].possibility_values[j] = Math.floor(
          Math.random() * (parts[i].request_number + 1)
        );
      }
      while (true) {
        for (let bal = 0; bal < added_stock; bal++) {
          temp = parts[i].possibility_values[bal];
          x += temp;
        }
        if (x == parts[i].request_number) {
          break;
        }
        for (let j = 0; j < added_stock; j++) {
          parts[i].possibility_values[j] = Math.floor(
            Math.random() * (parts[i].request_number + 1)
          );
        }
        x = 0;
      }
    }

    for (let k = 0; k < added_stock; k++) {
      while (true) {
        for (let l = 0; l < parts.length; l++) {
          pawn = parts[l].request_length * parts[l].possibility_values[k];
          total += pawn;
        }
        console.log("total değeri:" + total);
        console.log(parts);
        console.log(added_stock);
        console.log("stok length: " + stock_length);
        if (total <= real_stock_length) {
          break;
        }
        for (let p = 0; p < parts.length; p++) {
          parts[p].possibility_values[k] = Math.floor(
            Math.random() * (parts[p].request_number + 1)
          );
        }
        total = 0;
      }
      result.push(total);
      total = 0;
    }

    for (let o = 0; o < result.length; o++) {
      end += result[o];
    }

    if (stock_length - end == difference) {
      break;
    }
    end = 0;
    result = [];
  }

  let tableDOM = document.getElementById("table-data");
  let resultDOM = "";
  totalLengthDOM = 0;
  totalLengthPawnDOM = 0;
  let toplam_kesim = 0;
  let toplam_kesim_sonuc = 0;
  for (let i = 0; i < added_stock; i++) {
    resultDOM += `
    <tr>
    <th scope="row">${i + 1}.</th>
    <td>
   `;
    for (let j = 0; j < parts.length; j++) {
      if (parts[j].possibility_values[i] == 0) {
        continue;
      }
      totalLengthPawnDOM =
        parts[j].request_length * parts[j].possibility_values[i];
      totalLengthDOM += totalLengthPawnDOM;
      resultDOM += `
    ${parts[j].request_length * 10} ölçüsünden ${parts[j].possibility_values[i]} 
    adet kesilecek <br/>
    `;
    }
    resultDOM += `
    </td>
    <td>${totalLengthDOM * 10}</td>`;
    toplam_kesim = totalLengthDOM;
    toplam_kesim_sonuc += toplam_kesim;
    resultDOM += `
    <td>%${(
      100 -
      ((totalLengthDOM * 10) / (real_stock_length * 10)) * 100
    ).toFixed(2)}</td>
    </tr>
    `;
    totalLengthDOM = 0;
  }

  resultDOM += `
<br>
<table class="table table-success table-striped">
<thead>
  <tr>
    <th scope="col">Toplam Kesim</th>
    <th scope="col">Toplam Fire(birim)</th>
    <th scope="col">Toplam Fire(%)</th>
  </tr>
</thead>
<tbody id="table-data">
<td>${toplam_kesim_sonuc * 10}</td>
<td>${stock_length * 10 - (toplam_kesim_sonuc * 10).toFixed(2)}</td>
<td>%${(100 - (toplam_kesim_sonuc / stock_length) * 100).toFixed(2)}</td>
</tbody>
</table>

`;

  tableDOM.innerHTML = resultDOM;
  parts = [];
  resultDOM = "";
  console.log(resultDOM);
}