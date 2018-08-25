import React, { Component } from 'react'
import test from './style';
require('./Confirm.css');
class Confirm extends Component {
  render() {
    const logo = "./logo.png";
    return (
      <div className="main" style={{ padding: '50px' }}>
        <div className="panel panel-info">
          <div className="panel-heading" style={{ borderRadius: '5px 5px 0 0' }}>
            <img src={require('./logo.png')} alt="logo" className="brand-logo" />
            <h1>Luật sử dụng</h1>

          </div>
          <div className="panel-body">
            <p className="title"></p>
            <div className="form-group shadow-textarea">
              <label htmlFor="exampleFormControlTextarea6">Để có thể sử dụng trang web, bạn cần chấp nhận các điều lệ sau đây</label>
              <div className="box" id="exampleFormControlTextarea6">
                <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#9ac400' }}>1. Nội quy về nickname - tài khoản cá nhân:</p>
                <p> 1.1) Đăng ký tham gia Website Hội Việt-Đức TPHCM là hoàn toàn miễn phí. Tên truy cập của bạn sẽ đăng ký được nếu không trùng lặp với các tên truy cập đã có từ trước. Với tài khoản của mình, bạn phải đồng ý không trao tài khoản của mình ai khác, với bất kỳ lý do - mục đích nào. Và bạn cũng đồng ý không sử dụng tài khoản của người khác để tham gia. Người đứng tên khai báo tài khoản sẽ hoàn toàn chịu trách nhiệm về các hoạt động của tài khoản do mình sở hữu, thực hiện trên diễn đàn.
                </p>
                <p> 1.2) Tất cả các thành viền đều phải sử dụng đầy đủ, nghiêm túc và chính xác các thông tin cá nhân.
                </p>
                <p> 1.3) Nếu thành viên bị phát hiện sử dụng thông tin cá nhân không nghiêm túc, giả mạo.. sẽ lập tức bị xử lý, với mức độ nặng nhất là xóa tài khoản.  </p>
                <br />
                <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#9ac400' }}>2. Nội quy về hình ảnh đại diện (avatar), chữ ký:</p>
                <p> 2.1) Không sử dụng những hình ảnh xấu, mang tính đồi trụy, quảng cáo, không phù hợp với thuần phong mỹ tục, mang tính đả kích đến chính trị, tôn giáo làm avatar.
                </p>
                <p> 2.2) Không sử dụng những chữ ký quá rắc rối , quá dài. Độ dài chữ ký không được quá 10 dòng chữ , không dùng có 5 màu sắc , không dùng quá 5 hình ảnh kèm theo !
                </p>
                <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#9ac400' }}>3. Nội dung bài viết, chủ đề khi tham gia diễn đàn:
                </p>
                <p>3.1) KHÔNG viết bài vi phạm thuần phong mỹ tục, pháp luật, văn hoá Việt Nam.</p>
                <p>3.2) KHÔNG viết bài có nội dung bêu xấu, vu khống, đồi truỵ, dùng từ thô tục.</p>
                <p>3.3) KHÔNG viết bài bêu xấu, khích bác, hay thiếu tôn trọng thầy cô giáo, với BẤT KỲ lý do nào.</p>
                <p>3.4) KHÔNG viết bài có nội dung biểu hiện sự thiếu tôn trọng, mạt sát, khích bác, cãi vã, gây mất đoàn kết.</p>
                <p>3.5) KHÔNG viết bài đả kích, bêu xấu đến các vấn đề Chính trị - Tôn giáo.</p>
                <p>3.6) KHÔNG viết bài vi phạm pháp luật, hướng dẫn người khác vi phạm pháp luật (vd: hướng dẫn phá hoại, trộm cắp, hack, bomb, crack, vi phạm bản quyền ...).</p>
                <p>3.7) KHÔNG gửi những thông tin giả mạo, đe dọa, khủng bố người khác.</p>
                <p>3.8) KHÔNG gửi bài hàng loạt, không có ý nghĩa, nội dung ko phù hợp với chủ đề, chuyên mục.</p>
                <p>3.9) KHÔNG lập các chủ đề có nội dung sai lệch với tiêu chí hoạt động chung của chuyên mục. Không lặp lại một chủ đề đã có hoặc lập một chủ đề có nội dung tương tự nhau. Không lập các chủ đề mới một cách tràn lan và không có hệ thống.</p>
                <p>3.10) KHÔNG lạm dụng các hình ảnh biểu cảm (smiley), màu sắc, kích thước, font chữ, viết HOA, hiệu ứng chữ.. trong bài viết.</p>
                <p>3.11) KHÔNG đăng tin quảng cáo, chào mời ở ngoài chuyên mục Thị trường.</p>
                <p>3.12) Bài viết bắt buộc phải là tiếng Việt có dấu (sử dụng bộ gõ có sẵn của diễn đàn hoặc bộ gõ của riêng mình).</p>
                <p>3.13) Đối với các bài viết được đưa hoặc trích dẫn từ nguồn khác, bạn BẮT BUỘC phải nêu rõ tên tác giả và nguồn gốc, xuất xứ của bài viết.</p>
                <p>3.14) KHÔNG cố tình sử dụng nhiều từ ngữ sai chính tả, bóp méo tiếng Việt.</p>
                <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#9ac400' }}>4. Các việc liên quan đến công tác quản lý, khiếu nại:
                </p>
                <p>4.1) Tất cả các thành viên khi tham gia, bắt buộc phải tuân theo Nội quy cùng sự quản lý của Ban điều hành.</p>
                <p>4.2) Việc xử lý nội dung vi phạm sẽ do Ban điều hành thực hiện. Trong trường hợp không phân biệt rõ ràng, Ban điều hành sẽ họp và lấy quyết định theo đại đa số, và đây là quyết định cuối cùng.
                </p>
                <p>4.3) Nhằm bảo đảm tính dân chủ và công bằng trong diễn đàn, thành viên có quyền gửi những thắc mắc, khiếu nại (vào chuyên mục Góp ý) để Ban điều hành giải đáp.
                </p>
                <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#9ac400' }}>5. Nguyên tắc làm viêc chung:</p>
                <p>5.1) Khi đã đăng ký tham gia Website Hội Việt-Đức TPHCM, xem như bạn đã ĐỒNG Ý với nội quy này. Ngoài nội quy chung cho toàn hệ thống diễn đàn, nếu chuyên mục mà bạn tham gia có nội quy riêng, bạn cũng phải tuân theo nội quy riêng đó.
                </p>
                <p>5.2) Ứng xử một cách văn minh, lịch sự trong diễn đàn. Ban điều hành khuyến khích các thành viên có những thông báo, khiếu nại, góp ý.. về các bài viết cũng như thành viên vi phạm nội quy, kể cả thành viên Ban điều hành.
                </p>
                <p>5.3) Các liên kết, hình ảnh trong diễn đàn do thành viên gửi lên, các thành viên phải hoàn toàn chịu trách nhiệm về nội dung bài viết của mình. Các thông tin vi phạm sẽ được xóa mà không cần báo trước.
                </p>
                <p>5.3) Nghiêm cấm các hành vi đột nhập trái phép (hack), các hành vi phá hoại đến hệ thống diễn đàn.
                </p>
                <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#9ac400' }}>6. Về Nội quy: </p>
                <p>Nội quy này được áp dụng từ ngày 01/09/2008. Nội quy có thể thay đổi, chỉnh sửa ở bất cứ thời điểm nào cho phù hợp với nội dung hoạt động và phương hướng của diễn đàn. Tất cả các thành viên tham gia đều có trách nhiệm thực hiện đúng nội quy.</p>
              </div>
            </div>
            <button className="btn btn-success pull-right" id="button-accept" style={{marginRight: '20px'}} disabled = {true}>Đồng ý</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Confirm;
