import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';

export const LabelSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className='text-2xl'>Text Label</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Text labels provide descriptive text for form elements or display information to users.</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Basic Label</h3>
            <Label>Simple Label Text</Label>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Label for Input</h3>
            <div className='space-y-2'>
              <Label htmlFor="l2">Username</Label>
              <Input id="l2" placeholder="Enter username" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}