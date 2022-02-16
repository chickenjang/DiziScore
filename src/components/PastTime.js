function PastTime({ createdAt }) {
  function getPastTime(createdAt) {
    const pastTime = ((Date.now() - createdAt) / 1000).toFixed();

    if (pastTime < 60) {
      return [pastTime, "초"];
    }
    if (pastTime < 60 * 60) {
      return [(pastTime / 60).toFixed(), "분"];
    }
    if (pastTime < 60 * 60 * 24) {
      return [(pastTime / 60 / 60).toFixed(), "시간"];
    }
    if (pastTime < 60 * 60 * 24 * 30) {
      return [(pastTime / 60 / 60 / 24).toFixed(), "일"];
    }
    if (pastTime < 60 * 60 * 24 * 365) {
      return [(pastTime / 60 / 60 / 24 / 30).toFixed(), "월"];
    }
    if (pastTime < 60 * 60 * 24 * 365 * 5) {
      return [(pastTime / 60 / 60 / 24 / 365).toFixed(), "년"];
    } else {
      return ["", "오래"];
    }
  }
  return <div>{getPastTime(createdAt)} 전</div>;
}

export default PastTime;
