// import react from "react"
import styled from "styled-components";

interface Sidebarprops {
  isOpen: boolean;
  toggleSidebar: () => void;
}
const Sidebar: React.FC<Sidebarprops> = ({isOpen, toggleSidebar}) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <Button onClick={toggleSidebar}>Toggle Sidebar</Button>
    <ul>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ul>
    </div>
  );
};
export default Sidebar
const Button = styled.button`
  width: 100px;
  height: 100px;
  background: orange;
`