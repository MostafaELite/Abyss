export default function QuestionHeader(props) {
    return <div className="question-header">
        <div style={questionHeaderContainer}>
            <div style={questionInfo}>
                <img className="mini-profile-pic" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/profile-1413099-1199196.png" alt="" />
                <span>أحمد أكل الأكيل</span>
                <span>2020-2-20</span>
            </div>
            <h2 className="question-title">
                هذا هو عنوان السؤال باللغه العربيه
            </h2>
        </div>

        <p className="question-content">
            هذا هو محتوي السؤال  باللغه العربيه الجميله من اليمين لليسار
        </p>

    </div>

}
const questionHeaderContainer = {
    display: 'flex',
    flexDirection: 'row-reverse'
};

const questionInfo = {
    width: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};
