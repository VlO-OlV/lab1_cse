import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Label } from '../ui/Label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';

export const SelectSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className='text-2xl'>Dropdown List</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Dropdown lists (selects) allow users to choose one option from a list, saving space compared to radio buttons.</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Basic dropdown for </h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Dropdown with label</h3>
            <div className='space-y-2'>
              <Label htmlFor="d2">Country</Label>
              <Select>
                <SelectTrigger id="d2">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Ukraine</SelectItem>
                  <SelectItem value="2">Germany</SelectItem>
                  <SelectItem value="3">Spain</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}