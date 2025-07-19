export const validateInput = ({ input }) => {
  const errors = {};

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

  // Kiểm tra avatar
  if (!input.avatar) {
    errors.avatar = "Ảnh đại diện là bắt buộc";
  }

  // Kiểm tra level
  if (typeof input.level !== "number" || input.level < 0) {
    errors.level = "Cấp độ phải là số không âm";
  }

  return errors;
};
