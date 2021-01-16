import { useState } from 'react';
import { List } from "./List";

function App() {
  const [description, setDescription] = useState('クリック前の表示');
  return (
    <div>
      { description }
      <List title="取扱言語一覧" />
    </div>
  );
}

export default App;
