import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { useMount } from 'react-use'
import cx from 'classnames'
import ReactDatePicker from 'react-datepicker'
import { useRecoilState } from 'recoil'

import { CustomButton } from './utils/CustomButton'
import { Todo, todosAtom } from 'store/atoms'

import { FileIcon, ImageIcon, PlusIcon, XIcon } from 'assets/svgs'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './modal.module.scss'

interface IModalProps {
  processName: string
  todo?: Todo
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ processName, todo, setModalOpen }: IModalProps) => {
  const [task, setTask] = useState('')
  const [category, setCategory] = useState('')
  const [categoryList, setCategoryList] = useState<string[]>([])
  const [categoryShow, setCategoryShow] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const [image, setImage] = useState<string | ArrayBuffer | null>()
  const [description, setDescription] = useState('')
  const [todoList, setTodoList] = useRecoilState(todosAtom)
  const [noTask, setNoTask] = useState(false)
  const [noCategory, setNoCategory] = useState(false)

  useMount(() => {
    if (!todo) return
    if (todo) {
      setTask(todo.task)
      setCategoryList(todo.category)
      setStartDate(new Date())
      setImage(todo?.image)
      setDescription(todo?.description)
    }
  })

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.currentTarget.value)
  }

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.currentTarget.value)
  }

  const handleCategoryShow = () => {
    setCategoryShow(true)
  }

  const handleCategorySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCategoryList((prevState) => [...prevState, category])
    setCategory('')
  }

  const handleCategoryDelete = (index: number) => {
    setCategoryList(categoryList.filter((selectItem) => categoryList.indexOf(selectItem) !== index))
  }

  const handleDateChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  const handleImageChange = (e: any) => {
    const file = e.target.files[0]
    // 이미지 이름 (e.target.files[0].name)
    const reader = new FileReader()

    reader.readAsDataURL(file)

    return new Promise(() => {
      reader.onload = () => {
        setImage(reader.result)
      }
    })
  }

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value)
  }

  const handleCreateTaskClick = () => {
    if (task !== '' && categoryList.length !== 0) {
      if (todo) {
        const todoIdArray = todoList[todo.process].map((todos) => todos.id)
        const todoIdIndex = todoIdArray.indexOf(todo.id)
        const copyArray = [...todoList[todo.process]]
        copyArray.splice(todoIdIndex, 1, {
          id: todo.id,
          process: todo.process,
          task,
          category: categoryList,
          date: [startDate, endDate],
          image,
          description,
        })
        setTodoList((oldTodos) => {
          return {
            ...oldTodos,
            [todo.process]: [...copyArray],
          }
        })
      } else {
        setTodoList((oldTodos) => {
          return {
            ...oldTodos,
            [processName]: [
              ...oldTodos[processName],
              {
                id: new Date(),
                process: processName,
                task,
                category: categoryList,
                date: [startDate, endDate],
                image,
                description,
              },
            ],
          }
        })
      }
      handleCloseModal()
    }
    if (task === '') {
      setNoTask(true)
    } else {
      setNoTask(false)
    }
    if (categoryList.length === 0) {
      setNoCategory(true)
    } else {
      setNoCategory(false)
    }
  }

  return (
    <>
      <div className={styles.background} />
      <div className={styles.modalContainer}>
        <div className={styles.modalHead}>
          <div>Create a new task</div>
          <XIcon className={styles.xBtn} onClick={handleCloseModal} />
        </div>
        <div className={styles.title}>
          <div className={styles.titleHead}>
            <div>Title</div>
            {noTask && <div className={styles.error}>제목을 입력해주세요</div>}
          </div>
          <input type='text' placeholder='할 일을 입력해주세요' value={task} onChange={handleTaskChange} />
        </div>
        <div className={styles.category}>
          <div className={styles.categoryHead}>
            <div>Task Type</div>
            {noCategory && <div className={styles.error}>카테고리를 입력해주세요</div>}
          </div>
          <form className={styles.categoryForm} onSubmit={handleCategorySubmit}>
            <PlusIcon className={styles.categoryBtn} onClick={handleCategoryShow} />
            <input
              className={cx(styles.categoryInput, { [styles.show]: categoryShow })}
              type='text'
              placeholder='카테고리 입력해주세요'
              value={category}
              onChange={handleCategoryChange}
            />
          </form>
          {categoryList.map((item, index) => {
            return (
              <button
                className={styles.categoryItem}
                type='button'
                key={`category-${item}`}
                onClick={() => handleCategoryDelete(index)}
              >
                {item}
              </button>
            )
          })}
        </div>
        <div className={styles.detail}>
          <div>Task Detail</div>
          <div className={styles.date}>
            <ReactDatePicker
              selected={startDate}
              onChange={handleDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              dateFormat='yyyy.MM.dd'
              customInput={<CustomButton />}
            />
          </div>
          <div className={styles.image}>
            <label className={styles.imageLabel} htmlFor='chooseFile'>
              <ImageIcon className={styles.imageBtn} />
              Choose Your Image 👈
            </label>
            <input type='file' id='chooseFile' accept='img/*' onChange={handleImageChange} />
          </div>
          <div className={styles.description}>
            <FileIcon />
            <input
              type='text'
              placeholder='상세한 내용을 입력하세요'
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <button className={styles.createBtn} type='button' onClick={handleCreateTaskClick}>
            Create Task
          </button>
        </div>
      </div>
    </>
  )
}

export default Modal

// 선택된 파일 없음 말고 파일 이름 띄워주기
// 카테고리 중복으로 했을 때 처리
// dates any types
// date Picker onSelect 생각해보기
// change type
// todo 있을 대 endDate setting 하기
// 컴포넌트로 분리해주기
// 컴포넌트 분리 후 dayjs를 여기서 이용해서 수정 하기
