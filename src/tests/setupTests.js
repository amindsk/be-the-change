import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//Setting up enzyme to use enzyme adapter
Enzyme.configure({
    adapter: new Adapter()
});