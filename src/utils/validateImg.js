export const validateImg = (file) => {
  const typeFile = ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG", "svg"];
  const maxSize = 1024 * 1024;

  const nameFile = file.name;
  const sizeFile = file.size;

  const errors = {};

  const extension = nameFile.split(".").pop().toLowerCase();

  // Kiểm tra định dạng file
  if (!typeFile.includes(extension)) {
    errors.avatar = "Ảnh không hợp lệ (chỉ hỗ trợ jpg, jpeg, png, svg)";
  }

  // Kiểm tra kích thước file
  if (sizeFile > maxSize) {
    errors.avatar = "Kích thước ảnh phải nhỏ hơn 1MB";
  }

  return errors;
};
