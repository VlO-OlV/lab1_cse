import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Label } from '../ui/Label';
import { RadioGroup, RadioGroupItem } from '../ui/RadioGroup';

export const RadioGroupSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className='text-2xl'>Radio Button</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Radio buttons allow users to select one option from a set of mutually exclusive choices. They are commonly used in forms for single-selection inputs.</p>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Basic Horizontal Radio Group</h3>
            <RadioGroup defaultValue="option1" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="r1-option1" className='cursor-pointer' />
                <Label htmlFor="r1-option1">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="r1-option2" className='cursor-pointer' />
                <Label htmlFor="r1-option2">No</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option3" id="r1-option3" className='cursor-pointer' />
                <Label htmlFor="r1-option3">Other</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Vertical Radio Group with Disabled Option</h3>
            <RadioGroup defaultValue="optionA" className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="optionA" id="r2-optionA" className='cursor-pointer' />
                <Label htmlFor="r2-optionA">Option A</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="optionB" id="r2-optionB" className='cursor-pointer' disabled />
                <Label htmlFor="r2-optionB">Option B (Disabled)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="optionC" id="r2-optionC" className='cursor-pointer' />
                <Label htmlFor="r2-optionC">Option C</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};