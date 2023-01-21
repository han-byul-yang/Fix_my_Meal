import MoveButton from 'components/MoveButton'

import styles from './guideContainer.module.scss'

const withGuideContainer = (WrappedComponent: () => JSX.Element, guideDescription: string, path: string) => {
  // eslint-disable-next-line func-names, react/display-name
  return function () {
    return (
      <>
        <p className={styles.guide}>{guideDescription}</p>
        <WrappedComponent />
        <MoveButton navigatePath={`${path}`}>다음으로</MoveButton>
      </>
    )
  }
}

export default withGuideContainer
