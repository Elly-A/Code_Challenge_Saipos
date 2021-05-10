import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export class CustomValidator {
  private static mailboxAPIKey = '42bc40bb8180a89b8d799300c42ad141';
  private static mailboxAPIUrl = 'https://apilayer.net/api/check';
  private static http = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));

  constructor() { }

  static emailValidator(control: AbstractControl): Observable<{ [key: string]: any } | null> {
    if (control.value.length > 4) {
      return CustomValidator.http.get(CustomValidator.mailboxAPIUrl, {
        params: {
          access_key: CustomValidator.mailboxAPIKey,
          email: control.value
        }
      }).pipe(
        map((res: any) =>
          res.mx_found && res.format_valid ?
            null :
            { isInvalid: true, apiResponse: res }
        )
      );
    } else {
      return of(null);
    }

  }
}
