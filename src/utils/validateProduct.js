import { toast } from "react-toastify";

export const validateInputProd = ({ input, file }) => {
  const typeFile = ["jpg", "jpeg", "png", "svg"];
  const maxSize = 1024 * 1024; // 1MB
  const errors = {};

  // Validate file ảnh
  if (!file || file.length === 0) {
    errors.avatars = "Vui lòng chọn ít nhất 1 ảnh";
  } else {
    if (file.length > 3) {
      errors.avatars = "Vui lòng chọn nhiều nhất 3 ảnh";
    } else {
      for (let i = 0; i < file.length; i++) {
        const extension = file[i].name.split(".").pop().toLowerCase();
        if (!typeFile.includes(extension)) {
          errors.avatars = "Ảnh không hợp lệ (chỉ hỗ trợ jpg, jpeg, png, svg)";
          break;
        }
        if (file[i].size > maxSize) {
          errors.avatars = "Kích thước ảnh phải nhỏ hơn 1MB";
          break;
        }
      }
    }
  }

  // Validate input
  if (!input.name) errors.name = "Please enter Name";
  if (!input.price) errors.price = "Please enter Price";
  if (!input.category) errors.category = "Please select Category";
  if (!input.brand) errors.brand = "Please select Brand";
  if (!input.detail) errors.detail = "Please enter Detail";
  if (!input.companyProfile) errors.companyProfile = "Please enter Company";

  return errors;
};
