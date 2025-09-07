import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/Tooltip';

export const TooltipSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className='text-2xl'>Tooltip</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Tooltips provide additional information when users hover over or focus on an element.</p>
        
        <TooltipProvider>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Example 1: Basic tooltip</h3>
              <Tooltip>
                <TooltipTrigger>Hover this text</TooltipTrigger>
                <TooltipContent>
                  <p>Additional info</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Example 2: Tooltip with side positioning</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>Right Tooltip</Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Content on the right</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}