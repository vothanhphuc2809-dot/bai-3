class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

const danhSach = [
    new SinhVien("SV01", "VÕ THÀNH PHÚC", 20, 8),
    new SinhVien("SV02", "HÀ VĂN SÂM", 21, 4),
    new SinhVien("SV03", "NGUYỄN QUỐC HUY", 19, 7),
    new SinhVien("SV04", "PHẠM HOÀNG HẢI", 22, 5),
    new SinhVien("SV05", "LÂM MINH KHANG ", 20, 3)
];


const sinhVienDat = danhSach.filter(sv => sv.diem >= 5);
console.log("DANH SACH SINH VIEN DAT YEU CAU:");

sinhVienDat.forEach(sv => {
    console.log(
        "Ma: " + sv.ma +
        ", Ho ten: " + sv.hoTen +
        ", Tuoi: " + sv.tuoi +
        ", Diem: " + sv.diem
    );
});

