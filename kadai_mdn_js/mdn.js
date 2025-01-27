// 表示したい日付を作成
const date = new Date(2025, 0, 27); // 0は1月を指します

// 各要素を取得し、ゼロ埋め
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');

// 漢字を挿入して文字列を作成
const formattedDate = `${year}年${month}月${day}日`;

console.log(formattedDate); // 結果: 2025年01月27日