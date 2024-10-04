let output = "";

// Function to go back to index.html
function goHome() {
    window.location.href = "../index.html";
}

function getText() {
    const inputData = $("#input").val(); // Lấy dữ liệu đầu vào
    const const_value = $("#const-value").val(); // Giá trị cố định ban đầu
    const replace_string = $("#replace_string").val(); // Lấy chuỗi cần thay đổi
    const start_number = parseInt($("#start_number").val()); // Số bắt đầu
    const end_number = parseInt($("#end_number").val()); // Số kết thúc

    // Kiểm tra điều kiện đầu vào
    if (isNaN(start_number) || isNaN(end_number) || start_number > end_number) {
        alert("Hãy nhập số kết thúc lớn hơn số nhập bắt đầu.");
        return;
    }

    output = const_value + "\n"; // Khởi tạo đầu ra với giá trị cố định

    // Dùng replace chuỗi cần thay đổi và số trong khoảng từ start_number đến end_number
    for (var i = start_number; i <= end_number; i++) {
        let regex = new RegExp(replace_string + "\\d+", "g"); // Tìm chuỗi và số cần thay đổi
        let rep_1 = inputData.replace(regex, replace_string + i); // Thay thế số sau chuỗi
        output += rep_1 + "\n"; // Thêm kết quả vào output
    }

    // Hiển thị kết quả trong khung thông báo
    $("#generatedText").val(output); // Sửa lại để sử dụng ID chính xác
    $("#notification").show(); // Hiển thị khung thông báo
}

// Function to close the notification
function closeNotification() {
    $("#notification").hide(); // Ẩn khung thông báo
}

// Function to copy the text from the notification
function copyText() {
    const textArea = document.createElement("textarea");
    textArea.value = output; // Đặt nội dung để sao chép
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea); // Xóa textarea sau khi sao chép

    // Hiển thị thông báo sao chép
    $("#copyNotification").show(); // Hiện thông báo
    setTimeout(function() {
        $("#copyNotification").fadeOut(); // Tự động ẩn sau 2 giây
    }, 2000); // Thời gian ẩn (2000ms = 2 giây)
}
