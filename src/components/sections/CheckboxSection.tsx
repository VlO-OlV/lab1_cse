import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Checkbox } from '../ui/Checkbox';
import { Label } from '../ui/Label';

export const CheckboxSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className='text-2xl'>Checkbox</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Checkboxes allow users to select or deselect one or more options from a predefined list. They are ideal for multi-selection inputs in forms.</p>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Basic checkbox</h3>
            <div className='flex space-x-4'>
              <div className="flex items-center space-x-2">
                <Checkbox id="c1" className='cursor-pointer' />
                <Label htmlFor="c1">Accept terms</Label>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Checkbox Group</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="c2-1" className='cursor-pointer' />
                <Label htmlFor="c2-1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="c2-2" className='cursor-pointer' />
                <Label htmlFor="c2-2">Option 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="c2-3" className='cursor-pointer' disabled />
                <Label htmlFor="c2-3">Option 3 (Disabled)</Label>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};