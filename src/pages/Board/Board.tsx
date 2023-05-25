import Board from '@asseinfo/react-kanban'
import "@asseinfo/react-kanban/dist/styles.css";
import useBoard from '../../store/Board';
import "./Board.css"
import React from 'react';

const BoardPage = () => {

    const {board, setBoard} = useBoard()

    const handleColumnMove = (_card, source, destination) => {
      // const updateBoard = moveColumn(board, source, destination)
      // setBoard(updateBoard)  
    }

    const handleCardMove = (_card, source, destination) => {
      // const updateBoard = moveCard(board, source, destination)
      // setBoard(updateBoard)
    }


  return (
    <div className='board-container'>
        <span>Trello Board</span>

      <Board initialBoard={board}
        allowAddColumn
            allowRemoveColumn
            allowRemoveCard
            onCardDragEnd={handleCardMove}
        onColumnDragEnd={handleColumnMove}
      
      >
           
        </Board>      
    </div>
  )
}

export default BoardPage
