let output = "";
function getText() {
  const inputData = $("#input").val(); // Lấy dữ liệu đầu vào
  const const_value = $("#const-value").val(); // Giá trị cố định ban đầu
  const replace_string = $("#replace_string").val(); // Lấy chuỗi cần thay đổi
  const start_number = parseInt($("#start_number").val()); // Số bắt đầu
  const end_number = parseInt($("#end_number").val()); // Số kết thúc

  output = const_value;

  // Dùng replace chuỗi cần thay đổi và số trong khoảng từ start_number đến end_number
  for (var i = start_number; i <= end_number; i++) {
    let regex = new RegExp(replace_string + "\\d+", "g"); // Tìm chuỗi và số cần thay đổi
    let rep_1 = inputData.replace(regex, replace_string + i); // Thay thế số sau chuỗi
    output += rep_1 + "\n";
  }

  console.log(output); // Kết quả xuất ra console
}
