import { useEffect, useState } from 'react';
import { WatchList } from './components/WatchList';
import { WatchListForm } from './components/WatchListForm';
import './MyWatchList.css';

export const MyWatchList = () => {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('data');

    if (data) {
      setWatchList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(watchList));
  });

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      };
      setWatchList([...watchList, newItem]);
    }
  };

  const removeTask = (id) => {
    setWatchList([...watchList.filter((item) => item.id !== id)]);
  };

  const handleToggle = (id) => {
    setWatchList([
      ...watchList.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : { ...item }
      ),
    ]);
  };
  return (
    <div className="form-site">
      <header>
        <h1>Watch List: {watchList.length}</h1>
      </header>
      <WatchListForm addTask={addTask} />
      {watchList.map((item) => {
        return (
          <WatchList
            item={item}
            key={item.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
};
