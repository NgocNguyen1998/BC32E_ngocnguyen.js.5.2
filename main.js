/**--------Bài tập 1: Tính thuế thu nhập cá nhân--------
 * input: thu nhập năm, số người phụ thuộc,họ tên
 * xử lý:
 * + Tạo biến thuNhapNam lấy value
 * + Tạo biến nguoiPhuThuoc lấy value
 * + Tạo biến nhapTen lấy value (string)
 * + Thu nhập chịu thuế = (thuNhapNam - 4tr- nguoiPhuThuoc * 1.6tr)* Thuế suất
 * + Tạo biến ketQua_b1 = '';
* output:
 * + Tên người nhập, thuế phải nộp
 */

function tinhTienThueTNCN(id1, id2) {
    var thuNhap = +document.getElementById(id1).value;
    var phuThuoc = +document.getElementById(id2).value;
    var ten = document.getElementById('nhapTen').value;
    var thueSuat = 0;
    var thuNhapChiuThue = 0;
    thuNhapChiuThue = (thuNhap - 4000000 - phuThuoc * 1600000);
    var tienPhaiNop = 0;
    if (thuNhap < 0 || phuThuoc < 0 || (!Number.isInteger(phuThuoc))||ten==='') {
        tienPhaiNop = 'Không hợp lệ'
    }
    else {
        if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000) {
            thueSuat = 0.05
        } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
            thueSuat = 0.1
        } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
            thueSuat = 0.15
        } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
            thueSuat = 0.2
        } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
            thueSuat = 0.25
        } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
            thueSuat = 0.3
        } else if (thuNhapChiuThue > 960000000) {
            thueSuat = 0.35
        } else {
            thueSuat = 0
        }

        if (thuNhapChiuThue > 0) {
            tienPhaiNop = (thuNhapChiuThue * thueSuat).toLocaleString();
        } else {
            tienPhaiNop = 'Không nộp thuế'
        }
    }
    return tienPhaiNop;
}

document.getElementById('tinhTienThue').onclick = function () {
    var ketQua_b1 = tinhTienThueTNCN('thuNhapNam', 'nguoiPhuThuoc');
    var ten = document.getElementById('nhapTen').value;
    document.getElementById('ketQua_b1').innerHTML = 'Họ tên: ' + ten + '; Tiền thuế thu nhập cá nhân phải nộp: ' + ketQua_b1 + ' VND';

}

/**-----Bài 2: Tính tiền cáp--------
 * input: số kênh, số kết nối (number)
 * xử lý: 
 * + Tạo biến soKenh lấy value
 * + Tạo biến soKetNoi lấy value
 * + Tạo biến ketQua_b2 =0;
 * + Tạo biến loaiKhachHang lấy value
 * + Tạo biến maKhachHang lấy value
 * + Tính tiền cáp trong từng trường hợp của đề
 * 
 * output:
 * + Tiền cáp phải nộp của người dùng
 */

function myFunction() {
    var type = document.getElementById('loaiKhachHang').value;

    if (type === 'doanhNghiep') {
        document.getElementById("change").style.display = "block";
    } else { document.getElementById("change").style.display = "none"; }
}

function tinhTienCap(id1, id2, id3) {
    var loaiKhachHang = document.getElementById(id1).value;
    var soKenh = +document.getElementById(id2).value;
    var soKetNoi = +document.getElementById(id3).value;
    var phiHoaDon = 0;
    var phiCoBan = 0;
    var phiKenhCaoCap = 0;
    var chiPhi = 0
    switch (loaiKhachHang) {
        case 'nhaDan': {
            phiHoaDon = 4.5
            phiCoBan = 20.5
            phiKenhCaoCap = 7.5
        }; break
        case 'doanhNghiep': {
            phiHoaDon = 15
            phiCoBan = 75
            phiKenhCaoCap = 50
        }; break
        default: {
            phiHoaDon = 0
            phiCoBan = 0
            phiKenhCaoCap = 0
        };
    }

    if (soKenh >= 0) {
        if (loaiKhachHang === 'nhaDan') {
            chiPhi = phiHoaDon + phiCoBan + soKenh * phiKenhCaoCap
        } else if (loaiKhachHang === 'doanhNghiep') {
            if (soKetNoi >= 0 && soKetNoi <= 10) {
                chiPhi = phiHoaDon + phiCoBan + phiKenhCaoCap * soKenh
            } else if (soKetNoi > 10) {
                chiPhi = phiHoaDon + phiCoBan + (soKetNoi - 10) * 5 + phiKenhCaoCap * soKenh
            } else {
                chiPhi = 'Không hợp lệ!'
            }
        } else {
            chiPhi = "Vui lòng chọn loại khách hàng!"
        }
    } else {
        chiPhi = 'Không hợp lệ!'
    }
    return chiPhi;
}

document.getElementById('tinhTienCap').onclick = function () {
    var maKhachHang = document.getElementById('maKhachHang').value;
    var ketQua2 = tinhTienCap('loaiKhachHang', 'soKenh', 'soKetNoi');
    var ketQua_b2 = '';

    if (ketQua2>=0){
        ketQua_b2 = 'Mã khách hàng: ' + maKhachHang + '; Tiền cáp: $' + ketQua2;
    }else if(ketQua2==='Không hợp lệ'){
        ketQua_b2 = 'Không hợp lệ!'
    }else if(ketQua2==='Vui lòng chọn loại khách hàng!'){
        ketQua_b2 = 'Vui lòng chọn loại khách hàng!'
    }else{
        ketQua_b2 = 'Không hợp lệ!'
    }
    document.getElementById('ketQua_b2').innerHTML = ketQua_b2;
}