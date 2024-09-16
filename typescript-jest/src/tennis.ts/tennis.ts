export class Tennis implements TennisGame {
    private player1Score: number = 0;
    private player2Score: number = 0;
    private player1Name: string;
    private player2Name: string;
  
    constructor(player1Name: string, player2Name: string) {
      this.player1Name = player1Name;
      this.player2Name = player2Name;
    }
  
    getScore(): string {
        if ( this.player1Score === this.player2Score){
            return this.getEqualScore(); 
        }
    }

     private getEqualScore():string {
        switch (this.player1Score){
            case 0:
                score = 'Love-All';
                break;
              case 1:
                score = 'Fifteen-All';
                break;
              case 2:
          return  'Thirty-All';
               
              default:
                score = 'Deuce';
                break;
        }
     }
}