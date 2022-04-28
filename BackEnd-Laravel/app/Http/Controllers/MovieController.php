<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieCollection;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;


class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
     /* return response()->json(
          DB::table('movies') -> 
          select('movie_id',  'movie_rating','user_id') ->
        get(),*/
        return response()->Json(
            new MovieCollection(Movie::all()),
        );

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->only([
                'movie_id', 'movie_rating', 'user_id'
            ]
            ),
            [
                'movie_id' =>'required|integer|between:1,200',
                'movie_rating' =>'required|integer|between:1,5',
                'user_id' =>'required|integer|between:1,10000'
            ]
            );
            
            if($validator->fails()){
                return response()->json(
                    $validator->errors(),
                    Response::HTTP_UNPROCESSABLE_ENTITY
                );
            }
            $movie = Movie::create(
                $request->only([
                    'movie_id', 'movie_rating', 'user_id'
                
                ]));
                     return response()->json([
                        new MovieResource($movie),
                        'Response Status' => Response::HTTP_OK]);      
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show(Movie $movie)
    {
        return response()->json([
            new MovieResource($movie),
            'Response Status' => Response::HTTP_OK
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Movie $movie)
    {
       $movie->update($request->only([
        'movie_id', 'movie_rating', 'user_id'
       ]));

       return response()->json([
        new MovieResource($movie),
        'Response Status' => Response::HTTP_OK
    ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie)
    {
        $movie->delete();
        return response()->json([
            'Response Status' => Response::HTTP_NO_CONTENT
        ]);
    }

    //Funzione che permette la ricerca nel database del "movie_id" richiesto, tramite chiamata su postman
    public function getRatingByMovieId($movie_id){
        return response()->json([
            'Ratings'=>new MovieCollection( Movie::where('movie_id','LIKE',$movie_id)->get()),
            'Response Status'=>Response::HTTP_OK
        ]);
    }

    //Funzione che permette la ricerca nel database del "movie_id" richiesto, tramite chiamata su postman
    public function getRatingByUserId($user_id){
        return response()->json([
            'Ratings'=>new MovieCollection( Movie::where('user_id','LIKE',$user_id)->get()),
            'Response Status'=>Response::HTTP_OK
        ]);
    }

    //Funzione che permette la ricerca nel database di "user_id" e "movie_id" richiesti, tramite chiamata su postman
    public function getRatingsByUserIdAndMovieId($user_id, $movie_id){
        return response()->json([
            'Ratings'=>new MovieCollection( Movie::where('user_id','LIKE',$user_id)->where('movie_id','LIKE',$movie_id)->get()),
            'Response Status'=>Response::HTTP_OK
        ]);
    }

}
