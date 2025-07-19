export const validateInput = ({ input, file }) => {
  const typeFile = ["jpg", "jpeg", "png", "svg"];
  const maxSize = 1024 * 1024;
  const errors = {};

  let nameFile = "";
  let sizeFile = 0;
  if (file) {
    nameFile = file.name;
    sizeFile = file.size;
  }

  const extension = nameFile.split(".").pop().toLowerCase();

  // Kiểm tra avatar
  if (!typeFile.includes(extension)) {
    errors.avatar = "Ảnh không hợp lệ (chỉ hỗ trợ jpg, jpeg, png, svg)";
  } else if (sizeFile > maxSize) {
    errors.avatar = "Kích thước ảnh phải nhỏ hơn 1MB";
  }

  // Kiểm tra name
  if (!input.name.trim()) {
    errors.name = "Tên không được để trống";
  }

  // Kiểm tra email
  if (!input.email.trim()) {
    errors.email = "Email không được để trống";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.email = "Email không hợp lệ";
  }

  // Kiểm tra password
  if (!input.password.trim()) {
    errors.password = "Mật khẩu không được để trống";
  } else if (input.password.length < 6) {
    errors.password = "Mật khẩu phải có ít nhất 6 ký tự";
  }

  // Kiểm tra address
  if (!input.address.trim()) {
    errors.address = "Địa chỉ không được để trống";
  }

  // Kiểm tra level
  const level = Number(input.level);
  if (isNaN(level) || level < 0) {
    errors.level = "Cấp độ phải là số không âm";
  }

  return errors;
};
