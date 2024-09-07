module.exports = {
  root: true,
  extends: [
    '@react-native', // React Native의 기본 ESLint 설정
    'prettier', // Prettier와 ESLint 간의 규칙 충돌 방지
  ],
  plugins: ['prettier'], // Prettier 플러그인을 활성화
  rules: {
    'prettier/prettier': 'error', // Prettier 규칙을 ESLint 오류로 처리
  },
};
