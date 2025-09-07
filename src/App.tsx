import './App.css'
import { ButtonSection } from './components/sections/ButtonSection';
import { CheckboxSection } from './components/sections/CheckboxSection';
import { InputSection } from './components/sections/InputSection';
import { LabelSection } from './components/sections/LabelSection';
import { LinkSection } from './components/sections/LinkSection';
import { RadioGroupSection } from './components/sections/RadioGroupSection';
import { SelectSection } from './components/sections/SelectSection';
import { TableSection } from './components/sections/TableSection';
import { TabsSection } from './components/sections/TabsSection';
import { TooltipSection } from './components/sections/TooltipSection';
import { Separator } from './components/ui/Separator';

function App() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">UI Controls Showcase</h1>      
      <RadioGroupSection />
      <Separator className="my-8" />
      <CheckboxSection />
      <Separator className="my-8" />
      <InputSection />
      <Separator className="my-8" />
      <TabsSection />
      <Separator className="my-8" />
      <ButtonSection />
      <Separator className="my-8" />
      <LabelSection />
      <Separator className="my-8" />
      <LinkSection />
      <Separator className="my-8" />
      <TooltipSection />
      <Separator className="my-8" />
      <SelectSection />
      <Separator className="my-8" />
      <TableSection />
    </div>
  );
}

export default App
