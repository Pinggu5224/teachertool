// 학교 공통 기본값. 새로 연 선생님은 이 값으로 시작하고, 각자 설정에서 바꿀 수 있다.
// 공개 저장소에 올라가는 파일이므로 학생 정보, 유콜 주소·키 같은 비공개 정보는 넣지 않는다.
window.SCHOOL_DEFAULT = {
  school: {
    name: '솔강중학교',
    office: 'M10',        // 시도교육청 코드 (나이스)
    code: '8011390',      // 학교 코드 (나이스)
    officeName: '충청북도교육청'
  },
  // 교시: [시작, 끝]
  bells: [
    ['09:00', '09:45'], ['09:55', '10:40'], ['10:50', '11:35'], ['11:45', '12:30'],
    ['13:20', '14:05'], ['14:15', '15:00'], ['15:10', '15:55']
  ],
  lunchAfter: 4,
  workStart: '08:30',
  workEnd: '16:30',
  // 날씨 위젯 지역 (Open-Meteo 좌표)
  weather: { name: '충청북도 오송', lat: 36.614, lon: 127.323 },
  links: [
    { name: '업무포털', url: 'https://cbe.eduptl.kr' },
    { name: '나이스', url: 'https://cbe.neis.go.kr' },
    { name: 'K-에듀파인', url: 'https://klef.cbe.go.kr' },
    { name: '학교 홈페이지', url: 'https://school.cbe.go.kr/solgang-m' }
  ]
};
