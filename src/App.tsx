// 1. 引入你刚才保存的那个 ProjectWiki 文件
// 注意：这里假设你的 ProjectWiki.tsx 就在 src 目录下，和 App.tsx 在同一级
import ProjectWiki from './ProjectWiki'

function App() {
  // 2. 让 App 组件直接显示 ProjectWiki 的内容
  return (
    <ProjectWiki />
  )
}

export default App